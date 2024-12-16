import React from "react";
import { SearchSection } from "../SearchSection/SearchSection";

export const Navbar=()=>{
    return (
        <div className="logo-search">
            <div className="logoClass">
                <img src="/file.png" alt="" className="logo"/>
            </div>
            <SearchSection />
          </div>
    )
}