import React, {useState, useEffect} from 'react';
import { PageContainer } from './styled';
import frontendAPI from '../../helpers/front-endAPI';
import { useLocation, Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Repository = (props)=> {
    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();

    const api = frontendAPI();
    const [repos, setRepos] = useState([]);
    const [idPessoa, setIdPessoa] = useState(query.get('IdPessoa'));

    const getRepos = async() => {
        const json = await api.getRepos(
            query.get('IdPessoa')
        )
        setRepos(json.repos);
    }

    useEffect(()=>{
        getRepos()
        console.log(Cookies.get('currentPage'))
    },[])

    return(
        <PageContainer>
            <div>
                <Link to={`/?currentPage=${Cookies.get('currentPage')}`}>
                    Back
                </Link>
                <h3>Repository</h3>
            </div>
            <div className="AreaList">
                {repos &&
                    repos.map((i,k)=>
                        <div className="AreaList--data" key={k}>
                            <div>{i.CdChamada}</div>
                            <div>{i.NmPessoa}</div>
                            <div>{i.DsLogin}</div>
                            <div>{parseFloat(i.VlPedido).toFixed(2)}</div>
                        </div>
                )}
            </div>
        </PageContainer>
    )
}

export default Repository;