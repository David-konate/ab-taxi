import React from "react";

interface InformationDialogProps {
  title: string;
  message: string;
  isError?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const InformationDialog: React.FC<InformationDialogProps> = ({
  title,
  message,
  isError,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const className = isError ? "message error" : "message";

  return (
    <div className="information-dialog">
      <div className={className}>
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default InformationDialog;
