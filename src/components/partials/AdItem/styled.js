import styled from 'styled-components';

export const Item = styled.div`

    .adItem{
        display:flex;
        .itemId{
            margin:10px;
        }
        .itemName{
            width:1000px;
        }
        .areaButton{
            display:flex;
            justify-content:flex-end;
            align-items:flex-end;
            width:100%;

            .areaDetail{
                display:flex;
                margin:0px 10px;
                background-color:#FF0000;
                padding:4px;
                border-radius:5px;
                color:#FFFFFF;
                cursor:pointer;
            }

            .areaRepos{
                text-decoration:none;
                display:flex;
                margin:0px 10px;
                background-color:#FF0000;
                padding:4px;
                border-radius:5px;
                color:#FFFFFF;
                cursor:pointer;
            }
        }
    }

@media (max-width:800px){
    a{
        height:auto;
    }
}


@media (max-width:600px){
    a{
        height:auto;
    }
}
`;