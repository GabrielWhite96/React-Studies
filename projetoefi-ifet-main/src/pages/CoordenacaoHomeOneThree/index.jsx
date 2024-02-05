import React from "react";

import { Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const CoordenacaoHomeOneThreePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[338px] bg-gradient  flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-epilogue gap-[21px] items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row gap-10 items-start justify-start p-9 sm:px-5 w-full">
              <Text
                className="mb-1.5 text-gray-700 text-xl"
                size="txtEpilogueRomanBold20Gray700"
              >
                Turmas
              </Text>
              <Img
                className="h-[15px] md:h-auto object-cover w-[2%]"
                src="images/img_setadireita1.png"
                alt="setadireitaOne"
              />
            </div>
            <div className="flex flex-col font-encodesanssemicondensed md:gap-10 gap-[83px] items-start justify-start w-[96%] md:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtEncodeSansSemiCondensedBold36"
                >
                  Selecione o Teste
                </Text>
                <div className="bg-white-A700 border border-deep_purple-A700 border-solid flex flex-col items-start justify-start p-1.5 rounded-[10px] shadow-bs w-full">
                  <Img
                    className="h-[37px] md:h-auto mb-[9px] md:ml-[0] ml-[3px] object-cover w-[3%]"
                    src="images/img_lupa.png"
                    alt="lupa"
                  />
                </div>
              </div>
              <div className="font-epilogue md:h-[758px] h-[762px] relative w-4/5 md:w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px]">
                    <Text
                      className="text-gray-600 text-xl"
                      size="txtEpilogueRomanBold20Gray600"
                    >
                      |Aluno
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-start justify-start mt-0.5 p-[34px] sm:px-5 rounded-[10px] shadow-bs1 w-full">
                    <Text
                      className="ml-8 md:ml-[0] text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      João Gabriel
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[33px] mt-[35px] text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      Marcela Ferreira{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[33px] mt-8 text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      Vanessa Lopes
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[33px] mt-7 text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      Vitor Carlos
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[33px] mt-[27px] text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      Maria Eduarda
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[33px] mt-[31px] text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      João Pedro
                    </Text>
                    <Text
                      className="ml-8 md:ml-[0] mt-[27px] text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      Leonardo Melo
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[33px] mt-[31px] text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      Patricia Vieira{" "}
                    </Text>
                    <Text
                      className="mb-2.5 md:ml-[0] ml-[30px] mt-[22px] text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      Pedro Henrique
                    </Text>
                  </div>
                  <Text
                    className="bg-indigo-900 h-[35px] justify-center md:ml-[0] ml-[9px] mt-[49px] pl-3.5 pr-[19px] py-0.5 rounded-[12px] sm:text-2xl md:text-[26px] text-[28px] text-shadow-ts text-white-A700 w-[251px]"
                    size="txtEpilogueRomanBold28"
                  >
                    Começar Teste
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[23px] mt-[130px] text-gray-600_01 text-xl"
                    size="txtEpilogueRomanBold20Gray60001"
                  >
                    100 Testes
                  </Text>
                </div>
                <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[12%] w-full" />
                <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[18%] w-full" />
                <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-1/4 w-full" />
                <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[31%] w-full" />
                <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[38%] w-full" />
                <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[45%] w-full" />
                <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto w-full" />
                <Line className="absolute bg-black-900 bottom-[42%] h-px inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-black-900 bottom-[36%] h-px inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-black-900 bottom-[29%] h-px inset-x-[0] mx-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoordenacaoHomeOneThreePage;
