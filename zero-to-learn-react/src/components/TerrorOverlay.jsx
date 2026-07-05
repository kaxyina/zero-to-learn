export default function TerrorOverlay({ visible, onClose }) {
    if (!visible) return null;

    return (
        <div className="terror-overlay">
            <div className="terror-scare" />
            <p className="terror-msg">你并不孤单……</p>
            <button className="btn-escape" onClick={onClose}>逃离</button>
        </div>
    );
}
