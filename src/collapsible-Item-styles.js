import { css } from "lit-element";

export const collapsibleItemStyles = css`
  :host {
    display: block;
  }
  button {
    outline: none;
    cursor: pointer;
  }
  
  a{
    text-decoration: none;
    color: var(--black-color, #FFFFFF) 
  }
  a:visited {
    color: var(--black-color, #FFFFFF))
  }
  
  .list__item {
    border-top: 1px solid #d3d3d3;
  }
  .list__item--no-border {
    border-top: 0;
  }
  .list__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    heigt: 75px;
  }
  .list__title {
    padding-left: 1px;
    text-transform: uppercase;
    font-size: 24px;
    color: var(--white-color);
  }
  .list__toggle {
    border: transparent;
    width: 30px;
    height: 30px;
    margin: 16px;
    background-color: var(--background-color-plus, transparent);
    background-image: url("/images/ico_plus_w.svg");
    background-position: 3px center;
    transition: background 1s ease-in-out;
  }
  .list__toggle--plus {
    border: transparent;
    width: 30px;
    height: 30px;
    margin: 16px;
    background-color: var(--background-color-close, transparent);
    background-image: url("/images/ico_close_w.svg");
    background-position: 3px center;
    transition: background 0.5s ease-in-out;
  }
  
  .list__body[hidden] {
    display: none;
  }
  .list__body {
    display: block;
  }
  .list__body-description{
    display: flex;
    flex-direction: row;
    font-size: var(--font-size-m);
  }
  .list__body-description__icon{
    height: 20px;
    margin: 18px 9px 18px 0;
  }
  `;
