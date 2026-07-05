import { useReveal } from '../hooks/useReveal';
import Card from './Card';

const BOOKS = [
    { image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&fit=crop&q=80', alt: '弗兰肯斯坦', title: '弗兰肯斯坦', subtitle: '玛丽·雪莱', description: '科学怪人的悲剧——当人类妄图扮演上帝，创造的怪物却拥有了灵魂。哥特文学的开山之作。' },
    { image: 'https://images.unsplash.com/photo-1518780664697-2e5a0c0e2b5a?w=600&fit=crop&q=80', alt: '德古拉', title: '德古拉', subtitle: '布拉姆·斯托克', description: '吸血鬼伯爵从特兰西瓦尼亚降临伦敦，黑暗的诱惑与永生的诅咒交织成永恒经典。' },
    { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&fit=crop&q=80', alt: '克苏鲁的呼唤', title: '克苏鲁的呼唤', subtitle: 'H.P. 洛夫克拉夫特', description: '在深海沉睡的旧日支配者，疯狂的呓语侵蚀心智。宇宙恐怖的开创者。' },
    { image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&fit=crop&q=80', alt: '闪灵', title: '闪灵', subtitle: '斯蒂芬·金', description: '远望旅馆的漫长冬季，一个作家逐渐陷入疯狂。"只工作不玩耍，聪明孩子也变傻。"' },
];

export default function LiteratureSection() {
    const titleRef = useReveal();
    const descRef = useReveal();

    return (
        <section id="literature" className="section lit-section">
            <h2 className="section-title reveal" ref={titleRef}>📚 恐怖文学推荐</h2>
            <p className="section-desc reveal" ref={descRef}>这些经典将带你走入黑暗的深渊……</p>
            <div className="card-grid">
                {BOOKS.map((book, i) => (
                    <Card key={i} {...book} />
                ))}
            </div>
        </section>
    );
}
