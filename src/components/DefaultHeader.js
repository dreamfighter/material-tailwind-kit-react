export default function DefaultHeader(props) {
    return (
        <section className="relative block h-[500px]">
            <div className={`${props.bg} bg-cover bg-center absolute top-0 w-full h-full`} />
        </section>
    );
}
