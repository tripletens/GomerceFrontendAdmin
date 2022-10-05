import "./index.scss";

export const OrderDetailCard = ({ title, children }) => {
  return (
    <>
      <address className="info-grid">
        <div className="info-title">
          <strong>{title}</strong>
        </div>
        <br />
        <div className="info-content">{children}</div>
      </address>
    </>
  );
};
