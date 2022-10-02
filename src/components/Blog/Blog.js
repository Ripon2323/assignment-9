import React from 'react';
import './Blog.css'



const Blog = () => {

    return (
        <div>
            <div>
                <h1 className='blog-color'>What is context api? </h1>
                <p className='blog-paragraph'>Context api is an important topic in react js.It provides a way to pass
                    data through the components without passing props.It is quite different.
                    Normally data is transferred one component to another component through props.It
                    is primarily used when some data needs to be accessible by many components at different
                    nesting levels.If anyone want to avoid passing some props through many levels,components composition is
                    often a simpler solution than context.React.createContext() is all we need.It returns a consumer and provider.
                    Provider is a component that as its suggest the state to its children.It will hold the store and be the parent
                    of all the component that might need that store.So these are the main feature of context api.
                </p>
            </div>
            <div>
                <h1 className='blog-color'>What is Semantic Tag</h1>
                <p className='blog-paragraph'>In programming semantic means the piece of a code.It is used in html, javascript and many other
                    languages.HTML was originally created as a markup language to describe documents on the early internet.As the internet grew was adopted by more
                    people,it needs changed.Where the internet was originially intended for sharing documents,now people wants to new things.
                    People started to look their website look nicer.Initially programmer can't use may semantic element thats why the website didn't
                    look more nice.They didn't use class ,id to design the website.HTML5 has some semantic element.They are
                    header,nav,article,time,aside.Before creating semantic element programmer used it different ways.So,these are the basic things about
                    semantic element. 
                </p>

            </div>

        </div>
    );
};

export default Blog;