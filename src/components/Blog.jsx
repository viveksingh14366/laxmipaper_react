import React, { useEffect, useState } from 'react'

const Blog = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const respons = await fetch('https://fincapita.co.in/wp-json/wp/v2/posts?_embed');
        setUsers(await respons.json());
        console.log(respons);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <section id='managementsection' className='productssection brownsection'>
            <div className='container'>
                <div className='sectiontitle'>
                    <h2 className='title'>Blog</h2>
                    <p className='titledisc'>Our management team comprises of veterans from the Indian paper industry, with well over several decades worth of experience under their belt. Their rich experience, insights and skillset along with their business acumen has helped Laxmi Board & Paper Mills maintain a constant trajectory of unequalled growth.</p>
                </div>
                <div className="row">
                    {
                        users.map((curElem) => {
                            return (
                                <div className='col-lg-4' key={curElem.id}>
                                    <div className="card-columns">
                                        <div className="card">
                                            <img className="card-img-top" src={curElem.source_url} alt="" />
                                            <div className="card-body">
                                                <h4 className="card-title">{curElem.title.rendered}</h4>
                                                <p className="card-text">Text</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        )
                    }


                </div>
            </div>
        </section>
    )
}

export default Blog