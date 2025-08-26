import './categoryCard.scss';

function CategoryCard({imgUrl,title}) {
    return (
        <div className="category-card">
            <img src={imgUrl} alt={title} />
            <h5>{title}</h5>
        </div>
    );
}

export default CategoryCard;