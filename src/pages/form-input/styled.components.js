import styled, { css } from "styled-components";

const shrink = css`
    align-items: flex-start;
    transform: translate(0, 0);
    top: 0;
    font-size: 0.8rem;
    `;
export const StyledFormInput = styled.div`
    background-color: transparent;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    label {
        font-weight: 600;
        opacity: 0.7;
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translate(20px, -50%);
        text-align: center;
        pointer-events: none;
        transition: top 0.3s, transform .3s, font-size 0.2s;
        ${({ value }) => (value.length ? shrink : "")}
    }
    input {
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        border: 0;
        background-color: transparent;

        &:focus {
            & + label {
                ${shrink}
            }
        }
    }
`;
