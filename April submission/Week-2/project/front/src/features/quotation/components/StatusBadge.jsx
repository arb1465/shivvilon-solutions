const StatusBadge = ({ status }) => {
  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium
        ${
          status === "CONFIRM"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }
      `}
    >
      {status}
    </span>
  );
};

export default StatusBadge;