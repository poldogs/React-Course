import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        setcategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input to add a new category */}
            <AddCategory 
                onNewCategory={(value) => handleAddCategory(value)}
            />

            {/* List of categories */}
                {
                    categories.map( category => {
                        return <GifGrid 
                            key={category}
                            category={category}
                        />
                    })
                }
        </>
    );
    }