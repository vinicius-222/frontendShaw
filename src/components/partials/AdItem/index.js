import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';


export default (props) => {
    const [stLoading, setStLoading] = useState(false);
    
    const AddClick = () => {
        props.onClick();
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
                    <div className="areaRepos">
                        <Link to="/repository">
                            Repository
                        </Link>
                    </div>
                </div>
            </div>
            
        </Item>
    );
}