import React from 'react';
import './About.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function About() {
    return (
        <>
            <Header />
            <section className="about">
                <h2>About the Company</h2>
                <p className="about__description">
                    The NornLight online store offers a wide selection of chandeliers to
                    illuminate your home and office. We have a range of chandeliers with
                    designs from classic to contemporary. At NornLight, we provide quality
                    chandeliers to enhance your comfort and style. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat eveniet recusandae mollitia aperiam laborum doloremque quae odio vel? Repellendus eveniet, dignissimos a earum accusamus omnis asperiores veniam ratione libero possimus? Officiis iure molestiae quas optio magni officia veritatis doloremque, fuga, ad mollitia tempore assumenda dolor cupiditate sequi dignissimos laudantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. In accusamus, architecto amet iusto consequuntur, dolores tenetur repudiandae maxime labore, ducimus sint eius aut quia quas dolore delectus odio dicta pariatur ex blanditiis a aliquam nobis provident possimus? Quaerat facilis quod reprehenderit ad magni, totam eligendi. Enim aliquam fugit ipsum nesciunt!
                </p>
                <div className="about__stats">
                    <div className="about__stat">
                        <h3>170+</h3>
                        <p>Products</p>
                    </div>
                    <div className="about__stat">
                        <h3>1000+</h3>
                        <p>Satisfied Customers</p>
                    </div>
                    <div className="about__stat">
                        <h3>170+</h3>
                        <p>Products</p>
                    </div>
                </div>
                <p className="about__description">
                    Our goal is to provide the best experience and quality products for all
                    of our customers.
                </p>
            </section>
            <Footer/>
        </>
    );
}

export default About;
