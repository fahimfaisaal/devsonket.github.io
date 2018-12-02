import React from "react";
import styled from "@emotion/styled";

const Navbar = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 45px 0;

    @media only screen and (max-width: 940px) {
      padding: 40px 25px;
    }

    @media print {
      margin: 0 auto;
      padding: 25px;
      text-align: center;
    }
  }

  ul li {
    display: inline-block;
  }

  ul li.btn-add {
    float: right;

    @media only screen and (max-width: 460px) {
      display: none;
    }
  }
`;

export default () => (
  <Navbar>
    <ul className="nav">
      <li className="brand">
        <a href="/">
          <span>ডেভ</span>সংকেত
        </a>
      </li>
      <li className="btn-add">
        <a href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9A%E0%A6%BF%E0%A6%9F%E0%A6%B6%E0%A7%80%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%A8?&body=%E0%A6%95%E0%A6%BF%20%E0%A6%95%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BE">
          + নতুন আরেকটা
        </a>
      </li>
    </ul>
  </Navbar>
);
