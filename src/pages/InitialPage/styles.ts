import styled,{ css } from 'styled-components';

interface FormProps{
    hasError:boolean;
}

export const Title = styled.h1`
font-size :48px;
color: #3A3A3A;
margin-top:30px;
max-width:450px;
`;


export const Form = styled.form<FormProps>`
margin-top:40px;
max-width:700px;
display:flex;
 
    input {
        flex:1;
        height:70px;
        padding:0 24px;
        border:0;
        border-radius:5px 0 0 5px;
        border : 2px solid #fff;

        ${(props)=> props.hasError && css`
        border-color:#c53030;
        `}
        &::placeholder {
            color:#a8a8b3;
        }
    }

    button {
        width:210px;
        height:70px;
        background: #04d361;
        border-radius:0px 5px 5px 0px;
        border:0;
        color:#fff;
        font-weight:bold;
        transition: background-color 0.2;
        &:hover{
            background: #006400;
        }
    }
`
export const Error = styled.span`
display:block;
color:#c53030;
`;



export const Repositories= styled.div`
margin-top:80px;
max-width:700px;
max-height:300px;
overflow-y:auto;

&::-webkit-scrollbar {
  width: 8px;
}

&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: whitesmoke; 
  border-radius: 10px;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #3d3d4d; 
}
    a {
        background:#ffff;
        border-radius:5px;
        width:100%;
        padding:24px;
        display:block;
        text-decoration:none;
        display:flex;
        align-items:center;
        transition:transform 0.2s;

        &:hover {
            transform : translateX(10px);
        }

        & + a {
            margin-top:16px;
        }
            img {
                width:64px;
                height:64px;
                border-radius:50%;
            }

            div {
                margin-left:16px;
                
                strong {
                    font-size:20px;
                    color:#3d3d4d;
                }

                p {
                    font-size:18px;
                    color:#a8a8b3;
                    margin-top:4px;
                }
            }

        svg {
            margin-left:auto;
            color:#cbcbd6;
        }

        
    }
`;

export const Profile = styled.section`
    margin-top:30px;

        header {
            display:flex;
            align-items:center;

            img {
                width:120px;
                height:120px;
                border-radius:50%;
            }

            div {
                margin-left:24px;
                
                strong {
                    font-size:36px;
                    color:#3d3d4d;
                }

                p {
                    font-size:18px;
                    color:#737380;
                    margin-top:4px;
                }
            }
        }

        ul {
            display:flex;
            list-style:none;
            margin-top:40px;

            li {

                & + li {
                    margin-left:80px;
                }
                strong {
                    display:block;
                    font-size:36px;
                    color:#3d3d4d;
                }
                
                span {
                    display:block;
                    margin-top:4px;
                    color:#6c6c80;
                }
            }
        }


`