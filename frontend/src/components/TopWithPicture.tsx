import './TopWithPicture.css';

export default function TopWithPicture({ title }: { title: string }) {
    return(
        <div className="top-container">
            <img src="/images/nikiBio.jpeg" className="top-image" />
            <div className="nikolija-bio">Nikolija Stanojević</div>
            <div className="page-title suisse-large">{title}</div>
        </div>
    )
}