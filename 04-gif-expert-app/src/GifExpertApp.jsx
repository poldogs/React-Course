import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

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

            <AddCategory 
                onNewCategory={(value) => handleAddCategory(value)}
            />

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