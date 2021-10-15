import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Item } from './styled';


export default (props) => {
    const [stLoading, setStLoading] = useState(false);
    
    const AddClick = () => {
        props.onClick();
    }

    const handleSubmit = (e) => {
        console.log(props.currentPage);
        e.preventDefault();
        Cookies.set('currentPage', props.currentPage, {expires:999});
        window.location.href = `/repository?IdPessoa=${props.data.IdPessoa}`;
    }

    useEffect(() => {
        const LoadImg = async () =>{
            let img = new Image;
            img.onload = () => {
                setStLoading(true);
            }
        }
        LoadImg();
    },[])
    
    return(
        <Item>
            <div className="adItem">
                <div className="itemId">{props.data.IdPessoa}</div>
                <div className="itemName">{props.data.NmPessoa}</div>
                <div className="areaButton">
                    <div className="areaDetail" onClick={AddClick}>Details</div>
                    <div className="areaRepos" onClick={handleSubmit}>
                        
                            Repository

                    </div>
                </div>
            </div>
            
        </Item>
    );
}