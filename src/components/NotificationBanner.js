import React from "react";
import "./NotificationBanner.css";

function NotificationBanner({ message, type, isVisible, onClose }) {
  return (
    isVisible && (
      <div className={`notification-banner ${type}`}>
        <span className="icon">{type === "success" ? "✅" : "❌"}</span>
        <span className="message">{message}</span>
        <button
          className="close-button"
          onClick={onClose}>
          ✖
        </button>
      </div>
    )
  );
}

export default NotificationBanner;
