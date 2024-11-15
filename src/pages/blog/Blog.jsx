import React from "react";
import "./Blog.scss";
import house1 from "../../assets/house1.png"
import house2 from "../../assets/house2.png"
import house3 from "../../assets/house3.png"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            image: house1,
            title: "Как правильно подготовиться для сауны?",
            date: "12 окт 2023",
        },
        {
            id: 2,
            image: house2,
            title: "Как правильно подготовиться для сауны?",
            date: "12 окт 2023",
        },
        {
            id: 3,
            image: house3,
            title: "Как правильно подготовиться для сауны?",
            date: "12 окт 2023",
        },
        {
            id: 4,
            image: house1,
            title: "Как правильно подготовиться для сауны?",
            date: "12 окт 2023",
        },
        {
            id: 5,
            image: house2,
            title: "Как правильно подготовиться для сауны?",
            date: "12 окт 2023",
        },
        {
            id: 6,
            image: house3,
            title: "Как правильно подготовиться для сауны?",
            date: "12 окт 2023",
        },
        {
            id: 7,
            image: house1,
            title: "Как правильно подготовиться для сауны?",
            date: "12 окт 2023",
        },
        {
            id: 8,
            image: house2,
            title: "Как правильно подготовиться для сауны?",
            date: "12 окт 2023",
        }
    ];

    return (
        <>
            <Header/>
            <div className="blog container">
                <h2 className="blog__title">Блог</h2>
                <div className="blog__grid">
                    {blogPosts.map((post) => (
                        <div className="blog__card" key={post.id}>
                            <img src={post.image} alt={post.title} className="blog__image" />
                            <h3 className="blog__card-title">{post.title}</h3>
                            <p className="blog__date">{post.date}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Blog;
