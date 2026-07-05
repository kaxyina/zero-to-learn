import { useReveal } from '../hooks/useReveal';
import Card from './Card';

const LEGENDS = [
    { image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&fit=crop&q=80', alt: '裂口女', title: '裂口女', tag: '🇯🇵 日本', description: '戴着口罩的女人在深夜拦住路人，问："我美吗？" 无论回答什么，你都难逃一劫……', link: 'https://www.youtube.com/results?search_query=Kuchisake+onna+裂口女+都市传说' },
    { image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&fit=crop&q=80', alt: '如月车站', title: '如月车站', tag: '🇯🇵 日本', description: '深夜电车驶向一个不存在的车站。你在2ch论坛直播自己的失踪——没有人能离开如月车站。', link: 'https://www.youtube.com/results?search_query=如月车站+Kisaragi+Station+都市传说' },
    { image: 'https://images.unsplash.com/photo-1478720568477-e2c23b1e9f3e?w=600&fit=crop&q=80', alt: 'Slender Man', title: 'Slender Man', tag: '🇺🇸 美国', description: '瘦长的无面人形在树林中静静伫立。看到他的人将逐渐失去理智，然后永远消失。', link: 'https://www.youtube.com/results?search_query=Slender+Man+urban+legend+documentary' },
    { image: 'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=600&fit=crop&q=80', alt: '血腥玛丽', title: '血腥玛丽', tag: '🇬🇧 欧美', description: '午夜对着镜子念三遍"Bloody Mary"，镜中的女鬼会现身。你敢试试吗？', link: 'https://www.youtube.com/results?search_query=Bloody+Mary+urban+legend+ritual' },
];

export default function LegendsSection() {
    const titleRef = useReveal();
    const descRef = useReveal();

    return (
        <section id="legends" className="section legends-section">
            <h2 className="section-title reveal" ref={titleRef}>👁️ 都市传说</h2>
            <p className="section-desc reveal" ref={descRef}>那些流传在暗夜中的故事，你敢听吗？</p>
            <div className="card-grid">
                {LEGENDS.map((legend, i) => (
                    <Card key={i} {...legend} isLegend />
                ))}
            </div>
        </section>
    );
}
