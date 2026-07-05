import { useReveal } from '../hooks/useReveal';

export default function AboutSection() {
    const titleRef = useReveal();
    const p1Ref = useReveal();
    const p2Ref = useReveal();
    const p3Ref = useReveal();

    return (
        <section id="about" className="section about-section">
            <h2 className="section-title reveal" ref={titleRef}>ℹ️ 关于本站</h2>
            <p className="reveal" ref={p1Ref}>Haunting Night —— 一个收集恐怖文化与都市传说的角落。</p>
            <p className="reveal" ref={p2Ref}>午夜钟声不息，故事永不终结。</p>
            <p className="reveal copyright" ref={p3Ref}>© 2026 Haunting Night. 所有的恐惧都源于未知。</p>
        </section>
    );
}
