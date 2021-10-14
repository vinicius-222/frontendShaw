import styled from 'styled-components';

export const PageContainer = styled.div`
    display:flex;
    background-color:#FFF;
    flex-direction:column;

    .BadyContainer{
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        width:100%;
        flex-wrap:wrap;
        border-radius:5px;
        margin-bottom:10px;
        
        .adItem {
            display:flex;
            width:900px;
            height:30px;
            border:1px solid #EEE;
            border-radius:5px;
            margin:3px 0px;
            align-items:center;
            padding:0px 5px;
        }
    }
    .pagination{
        display:flex;
        flex-wrap:wrap;
        justify-content:flex-end;
        align-items:flex-end;
        flex:1;
        margin:15px 0;
        margin-top:150px;
        padding-right:50px;

        .pagItem{
            display:flex;
            justify-content:center;
            align-items:center;
            height:30px;
            width:30px;
            border:1px solid #FF00FF;
            margin:1px;
            cursor:pointer;

        }
        .active{
            background-color:#CCC;
        }
    }

    .WindowArea{
        display:none;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:1;
        background-color:transparent;
        transition:all ease .5s;
        justify-content:center;
        align-items:center;
        overflow-y:auto;

        .areaFechar{
            display:flex;
            position:absolute;
            justify-content:center;
            align-items:center;
            color:#FFF;
            width:30px;
            height:30px;
            border-radius:15px;
            background-color:#FF0000;
            cursor:pointer;
            top:-35px;
            right:-35px;
        }
        .WindowBody{
            display:block;
            position:fixed;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background-color:#FFF;
            width:500px;
            height:500px;
            opacity:0;
            border-radius:10px;
            display:flex;
            margin:20px 0px;
            padding:2px;
            transition:all ease .5s;

            .area{
                display:flex;
                flex-direction:column;
                display:flex;
                justify-content:center;
                align-items:center;
                margin-right:50px;
                margin:2px;


                .area--dados{
                    display:flex;
                    
                    .area--title{
                        display:flex;
                        flex-direction:row;
                        justify-content:flex-end;
                        width:200px;
                    }
    
                    .area--data{
                        display:flex;
                        flex-direction:row;
                        width:300px;
                        margin-left:10px;
                        margin-right:10px;
                        flex-wrap:wrap;
                    }
                }
            }
        }
    }

`;