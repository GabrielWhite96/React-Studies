import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-gradient  flex flex-col md:gap-10 gap-[606px] justify-end mt-1.5 p-2 w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[9px] mr-[27px] mt-[83px] w-[89%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-indigo-700 flex flex-row items-center justify-between p-1.5 rounded-[13px] w-full">
                <Text
                  className="ml-[17px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtRobotoRomanMedium22"
                >
                  Gerenciar
                </Text>
                <Img
                  className="h-[19px] md:h-auto mr-3 object-cover w-[19px]"
                  src="images/img_setadireita1.png"
                  alt="rightarrowOne"
                />
              </div>
              <div className="flex flex-row items-start justify-between mt-[27px] w-[82%] md:w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtEpilogueRomanBold20"
                >
                  Testes
                </Text>
                <Img
                  className="h-[21px] md:h-auto object-cover"
                  src="images/img_rightarrow2.png"
                  alt="rightarrowTwo"
                />
              </div>
              <div className="flex flex-col items-center justify-start mt-[31px] w-[83%] md:w-full">
                <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtRobotoRomanMedium20"
                  >
                    Professores
                  </Text>
                  <Img
                    className="h-[19px] md:h-auto mt-1 object-cover"
                    src="images/img_rightarrow2_19x21.png"
                    alt="rightarrowTwo_One"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-[21px] w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtRobotoRomanMedium20"
                  >
                    Turmas
                  </Text>
                  <Img
                    className="h-[19px] md:h-auto object-cover"
                    src="images/img_rightarrow2_19x21.png"
                    alt="rightarrowThree"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-[17px] w-[99%] md:w-full">
                  <Text
                    className="mb-[7px] text-white-A700 text-xl"
                    size="txtRobotoRomanMedium20"
                  >
                    Alunos
                  </Text>
                  <Img
                    className="h-[19px] md:h-auto mt-3 object-cover"
                    src="images/img_rightarrow5.png"
                    alt="rightarrowFive"
                  />
                </div>
              </div>
              <div className="bg-indigo-700 flex flex-row items-start justify-between mt-[15px] p-1.5 rounded-[13px] w-[95%] md:w-full">
                <Text
                  className="mb-1.5 ml-1.5 text-white-A700 text-xl"
                  size="txtEpilogueRomanBold20"
                >
                  Menu Turma
                </Text>
                <Img
                  className="h-[21px] md:h-auto mb-1 mr-[17px] object-cover"
                  src="images/img_rightarrow2.png"
                  alt="rightarrowFour"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mb-[34px] mr-[115px] w-[64%] md:w-full">
            <div className="flex flex-row gap-[15px] items-start justify-between w-full">
              <Img
                className="h-[42px] md:h-auto mt-0.5 rounded-[50%]"
                src="images/img_rosto.png"
                alt="rosto"
              />
              <div className="flex flex-col gap-2 items-start justify-start">
                <Text
                  className="text-[17px] text-white-A700"
                  size="txtEpilogueRomanBold17"
                >
                  Tim Cook
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtEpilogueRomanBold14"
                >
                  timccok@force.com
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-900_01 flex flex-row gap-[11px] items-center justify-start mb-[1003px] mr-[9px] p-4 w-[98%]">
          <Img
            className="h-[50px] md:h-auto ml-9 object-cover w-[17%]"
            src="images/img_logofit1.png"
            alt="logofitOne"
          />
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
            size="txtEpilogueRomanBold28"
          >
            FitScanPro
          </Text>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
