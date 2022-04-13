function Bottom() {
    return (
        <section className="flex flex-col jusify-center items-center bg-home-500 py-3 font-space-grotesk text-home-800">
            <small>Website Version: v0.0</small>
            <small>&copy; Copyright {(new Date().getFullYear())}, Abe Z. Riggs IV</small>
        </section>
    );
}

export default Bottom;