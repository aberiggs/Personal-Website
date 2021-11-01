import "./Bottom.css";

function Bottom() {
    return (
        <section className="Bottom">
            <small>Website Version: v0.0</small>
            <small>&copy; Copyright {(new Date().getFullYear())}, Abe Z. Riggs IV</small>
        </section>
    );
}

export default Bottom;