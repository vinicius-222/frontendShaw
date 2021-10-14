import React, {useState, useEffect} from 'react';
import { PageContainer } from './styled';
import useApi from '../../helpers/front-endAPI';
import AdItem from '../../components/partials/AdItem';
import { LoadTela } from '../../components/Loading';

const Home = (props) => {
    const api = useApi();
    const [user, setUser] = useState([]);
    const [userDetails, setUserDetails] = useState([]);
    const [countUser, setCountUser] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);

    const getCountUser = async()=>{
        const json = await api.getCount();
        setCountUser(json.Count);
    }

    const getUser = async() => {
        let Limit = 30;
        let offset = (currentPage-1) * Limit + 1;
        const json = await api.getUser(
            offset
        )
        setUser(json.user);
    }

    const getDetails = async (id) => {
        const json = await api.getDetails(
            id
        )
        setUserDetails(json.details);
    }

    const handleOpemModal= (i) => {
        getDetails(i)
        setModal(!modal); 
        setTimeout(()=>{
            if (!modal){
                document.querySelector('.WindowArea').style.backgroundColor = "rgba(0,0,0,.7)";
                document.querySelector('.WindowBody').style.opacity = 1;
            }
        },400)
    }

    const handleCloseModal = (i) => {
        if (modal){
            document.querySelector('.WindowArea').style.backgroundColor = "transparent";
            document.querySelector('.WindowBody').style.opacity = 0;
        }

        setTimeout(()=>{
            setModal(!modal);
        },400)
    }

    useEffect(()=>{
        getUser();
        getCountUser();
    },[])

    useEffect(()=>{
        if(1 > 0) {
            setPageCount(Math.ceil( countUser / user.length));
        } else {
            setPageCount( 0 );
        }
    },[countUser]);

    useEffect(() =>{
        setLoading(true);
        getUser();
        setTimeout(()=>{
            setLoading(false);
        },1000)
        
    },[currentPage])

    let pagination = [];
    for(let i=1;i<=pageCount;i++) {
        pagination.push(i); 
    }

    return(
        <PageContainer>
            {loading &&
                <LoadTela visible={loading} height={100} width={100} color={'#FF0000'}/>
            }
            <div className="BadyContainer">
                {user && 
                    user.map((i, k) =>
                        <AdItem className="adItem" key={k} data={i} onClick={()=>{
                            handleOpemModal(i.IdPessoa);
                        }}/>
                    )
                }
            </div>
            <div className="pagination">
                {pagination.map((i,k)=>
                    <div onClick={()=>setCurrentPage(i)} className={i===currentPage?'pagItem active':'pagItem'}>{i}</div>  
                )}
            </div>
            <div  style={{display: modal ? "flex" : "none"}} className="WindowArea">
                <div className="WindowBody">
                    <div onClick={handleCloseModal} className="areaFechar">X</div>
                    <div className="area">
                        <div className="area--dados">
                            <div className="area--title">Nome:</div>
                            <div className="area--data">{userDetails[0].NmPessoa}</div>
                        </div>
                        <div className="area--dados"> 
                            <div className="area--title">Telefone:</div>
                            <div className="area--data">{userDetails[0].DsFaxEntrega}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Data de Nascimento:</div>
                            <div className="area--data">{userDetails[0].DtNascimento}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Email:</div>
                            <div className="area--data">{userDetails[0].DsLogin}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Nome do Endereco:</div>
                            <div className="area--data">Minha Casa</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Logradouto:</div>
                            <div className="area--data">{userDetails[0].DsLogradouroCobranca}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Numero:</div>
                            <div className="area--data">{userDetails[0].NrLogradouroCobranca}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Bairro:</div>
                            <div className="area--data">{userDetails[0].IdBairo}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Cidade:</div>
                            <div className="area--data">{userDetails[0].IdCidade}</div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default Home;