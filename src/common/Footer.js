import React from "react";
import styled from "styled-components";

const Footerdiv = styled.div`
  position: relative;
  height: 8em;
  width: 100%;
  background-color: #2e294e;
  text-align: center;
  p {
    font-size: 0.8rem;
    margin: 1px;
  }
`;

const Text = styled.div`
  padding-top: 18px;
  color: white;
`;

const Footer = () => {
  return (
    <Footerdiv>
      <Text>
        <p>문의 : wogud114@gmail.com</p>
        <p>@NovelPic 2023. All Rights Reserved.</p>
        <p>
          <a
            href="https://github.com/wanttobodybuilderifbbpro/novel_pick"
            style={{ color: "#616161" }}
          >
            NovelPic's Github
          </a>
        </p>
      </Text>
    </Footerdiv>
  );
};

export default Footer;
