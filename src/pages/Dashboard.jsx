import { useTaskContext } from "../context/TaskContext";
import styles from "./Dashboard.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const { tasks } = useTaskContext();

  const today = new Date().toISOString().split("T")[0];
  const todayTasks = tasks.filter((task) => task.date === today);
  const completedToday = todayTasks.filter((task) => task.completed);

  const completionRate =
    todayTasks.length > 0
      ? Math.round((completedToday.length / todayTasks.length) * 100)
      : 0;

  const getPastDates = (days) => {
    const dates = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      dates.push(d.toISOString().split("T")[0]);
    }
    return dates;
  };

  const pastDates = getPastDates(35);

  const contributionData = pastDates.map((date) => {
    const tasksForDay = tasks.filter((task) => task.date === date);
    const completedForDay = tasksForDay.filter((task) => task.completed);
    return completedForDay.length;
  });

  const getColor = (count) => {
    if (count === 0) return "#ebedf0";
    if (count < 2) return "#c6e48b";
    if (count < 4) return "#7bc96f";
    return "#196127";
  };

  const pieData = [
    { name: "Completed", value: completedToday.length },
    { name: "Remaining", value: todayTasks.length - completedToday.length },
  ];

  const COLORS = ["#4f46e5", "#525260ff"];

  return (
    <section className={styles.dashboard}>
      <h1>Dashboard</h1>

      {/* Pie Chart + Stats */}
      <div className={styles.topRow}>
        <div className={styles.pieCard}>
          <h2 className={styles.chartTitle}>Today's Progress</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className={styles.completionRate}>
            {completionRate}% Completion Rate
          </p>
        </div>

        <div className={styles.statBox}>
          <h3>{todayTasks.length}</h3>
          <p>Today's Tasks</p>
        </div>
      </div>

      {/* Heatmap */}
      <div className={styles.heatmapCard}>
        <h2 className={styles.heatmapTitle}>Last 5 Weeks Activity</h2>
        <div className={styles.heatmapWrapper}>
          <div className={styles.heatmap}>
            {contributionData.map((count, index) => (
              <div
                key={index}
                className={styles.box}
                style={{ backgroundColor: getColor(count) }}
                title={`${count} tasks completed`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {completionRate === 100 && todayTasks.length > 0 && (
        <p className={styles.congrats}>🎉 All tasks for today are done!</p>
      )}
    </section>
  );
};

export default Dashboard;
