import React  from "react";

// rendering on the screen  means to assure that the content is displayed on the page
import {render, screen} from '@testing-library/react';


// import '@testing-library/jest-dom/extend-expect'; // ❌ outdated path
import '@testing-library/jest-dom';

import Hero from '../landing_page/home/Hero';

// making a test suite--> pronouced as sweet

describe('Hero Component',()=>{
    test('renders hero image', ()=>{

        render(<Hero/>);
        // since we already have an alt text in the Hero.js
        const heroImage = screen.getByAltText("Hero Image");
        // Here we should write what we are epecting
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src" , "media/images/homeHero.png");


    });
});