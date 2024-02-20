import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAddCategory = () => {
        setcategories([...categories, inputValue]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input to add a new category */}
            <AddCategory setCategories={setcategories} />

            {/* List of categories */}
            <ol>
                {
                    categories.map( category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
    }