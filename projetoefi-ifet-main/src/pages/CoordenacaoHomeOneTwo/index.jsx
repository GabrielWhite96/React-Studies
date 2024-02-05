import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, ReactTable, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const CoordenacaoHomeOneTwoPage = () => {
  const table2Data = React.useRef([
    { primeirob: "Primeiro C", zipcodeOne: "2654", one: "05/01" },
    { primeirob: "Segundo A", zipcodeOne: "2156", one: "05/01" },
    { primeirob: "Segundo B", zipcodeOne: "2389", one: "05/01" },
    { primeirob: "Segundo C", zipcodeOne: "2098", one: "05/01" },
    { primeirob: "Terceiro A", zipcodeOne: "2756", one: "05/01" },
    { primeirob: "Terceiro B", zipcodeOne: "2514", one: "05/01" },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("primeirob", {
        cell: (info) => (
          <Text
            className="pb-[17px] pt-[26px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[351px] pb-0.5 text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            Primeiro B
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("zipcodeOne", {
        cell: (info) => (
          <Text
            className="pb-[17px] pt-[26px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[239px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            2931
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("one", {
        cell: (info) => (
          <Text
            className="pb-[11px] pt-8 text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[55px] pt-0.5 text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            05/01
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[338px] bg-gradient  flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-epilogue md:gap-10 gap-[94px] justify-start md:mt-0 mt-[3px] md:px-5 w-full">
            <div className="flex flex-col gap-[21px] items-center justify-start w-full">
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
              <div className="flex flex-col font-encodesanssemicondensed gap-2.5 items-start justify-start w-[96%] md:w-full">
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
            </div>
            <div className="flex flex-col items-start justify-start ml-11 md:ml-[0] w-[76%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[3px] w-[55%] md:w-full">
                <Text
                  className="md:mt-0 mt-[3px] text-gray-600 text-xl"
                  size="txtEpilogueRomanBold20Gray600"
                >
                  |Turma
                </Text>
                <Text
                  className="mb-[3px] md:ml-[0] ml-[285px] text-gray-600 text-xl"
                  size="txtEpilogueRomanBold20Gray600"
                >
                  ID
                </Text>
                <Text
                  className="mb-0.5 md:ml-[0] ml-[229px] text-gray-600 text-xl"
                  size="txtEpilogueRomanBold20Gray600"
                >
                  Data
                </Text>
              </div>
              <div className="bg-white-A700 border border-black-900 border-solid flex md:h-[301px] h-[504px] justify-end mt-0.5 relative rounded-[10px] shadow-bs1 w-full">
                <Text
                  className="mb-16 ml-3.5 mt-auto text-black-900 text-xl"
                  size="txtEpilogueRomanBold20Black900"
                >
                  Terceiro C
                </Text>
                <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                  <div className="h-[504px] md:h-[NaNpx] mb-auto mt-[-NaNpx] mx-auto w-full z-[1]">
                    <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[11%] w-full" />
                    <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-full inset-y-[0] items-center justify-start my-auto right-[23%] w-[48%]">
                      <Line className="bg-black-900 h-[504px] sm:h-px sm:w-full w-px" />
                      <Line className="bg-black-900 h-[504px] sm:h-px sm:ml-[0] ml-[244px] sm:w-full w-px" />
                      <Line className="bg-black-900 h-[504px] sm:h-px sm:ml-[0] ml-[322px] sm:w-full w-px" />
                    </div>
                  </div>
                  <Line className="bg-black-900 h-px mt-[-NaNpx] mx-auto w-full z-[1]" />
                  <Line className="bg-black-900 h-px mt-[-NaNpx] mx-auto w-full z-[1]" />
                  <Line className="bg-black-900 h-px mt-[-NaNpx] mx-auto w-full z-[1]" />
                  <Line className="bg-black-900 h-px mb-auto mt-[-NaNpx] mx-auto w-full z-[1]" />
                  <Line className="bg-black-900 h-px mb-[200px] mt-[-NaNpx] mx-auto w-full z-[1]" />
                  <Line className="bg-black-900 h-px mb-[150px] mt-[-NaNpx] mx-auto w-full z-[1]" />
                  <Line className="bg-black-900 h-px mb-[100px] mt-[-NaNpx] mx-auto w-full z-[1]" />
                  <Line className="bg-black-900 h-px mb-[50px] mt-[-NaNpx] mx-auto w-full z-[1]" />
                  <Line className="bg-black-900 h-px mt-[-NaNpx] mx-auto w-full z-[1]" />
                  <div className="flex flex-col items-center justify-start ml-[15px] mt-[-NaNpx] w-[54%] z-[1]">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-[51px] w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtEpilogueRomanBold20Black900"
                      >
                        Primeiro A
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[246px] text-black-900 text-xl"
                        size="txtEpilogueRomanBold20Black900"
                      >
                        2562
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[191px] text-black-900 text-xl"
                        size="txtEpilogueRomanBold20Black900"
                      >
                        05/01
                      </Text>
                    </div>
                  </div>
                  <div className="overflow-auto ml-[17px] mt-[-23.47px] w-[54%] z-[1]">
                    <ReactTable
                      columns={table2Columns}
                      data={table2Data.current}
                      rowClass={""}
                      headerClass=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between mb-[63px] ml-[368px] mt-[-NaNpx] w-1/4 z-[1]">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      2618
                    </Text>
                    <Text
                      className="text-black-900 text-xl"
                      size="txtEpilogueRomanBold20Black900"
                    >
                      05/01
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[23px] mt-[217px] text-gray-600_01 text-xl"
                size="txtEpilogueRomanBold20Gray60001"
              >
                100 Testes
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoordenacaoHomeOneTwoPage;
