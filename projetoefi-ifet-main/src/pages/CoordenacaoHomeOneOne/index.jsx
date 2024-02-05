import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, ReactTable, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const CoordenacaoHomeOneOnePage = () => {
  const table1Data = React.useRef([
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      fiveOne: "5",
      twelveOne: "12",
      groupThirtyOne: "6",
    },
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      fiveOne: "5",
      twelveOne: "12",
      groupThirtyOne: "20",
    },
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      fiveOne: "5",
      twelveOne: "12",
      groupThirtyOne: "2",
    },
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      fiveOne: "5",
      twelveOne: "12",
      groupThirtyOne: "10",
    },
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      fiveOne: "5",
      twelveOne: "12",
      groupThirtyOne: "13",
    },
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      fiveOne: "5",
      twelveOne: "12",
      groupThirtyOne: "12",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("vanessalopesdoOne", {
        cell: (info) => (
          <Text
            className="sm:mt-0 mt-[7px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[260px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            Vanessa Lopes do Santos
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("fiveOne", {
        cell: (info) => (
          <Text
            className="sm:mt-0 mt-1.5 text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[13px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            5
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("twelveOne", {
        cell: (info) => (
          <Text
            className="sm:mt-0 mt-[11px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[22px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            12
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("groupThirtyOne", {
        cell: (info) => (
          <Text
            className="border border-solid border-yellow-800 sm:px-5 px-[35px] py-[7px] rounded-[7px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="border border-light_green-900 border-solid min-w-[229px] sm:px-5 px-[35px] py-[7px] rounded-[7px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            17
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar1 className="!sticky !w-[338px] bg-gradient  flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
            <div className="flex flex-1 flex-col font-epilogue gap-[21px] items-center justify-start md:mt-0 mt-[3px] md:px-5 w-full">
              <div className="bg-white-A700 flex flex-row items-start justify-start p-[35px] sm:px-5 w-full">
                <Text
                  className="mb-1.5 ml-0.5 text-gray-700 text-xl"
                  size="txtEpilogueRomanBold20Gray700"
                >
                  Testes
                </Text>
                <Img
                  className="h-[15px] md:h-auto ml-[46px] mt-0.5 object-cover w-[2%]"
                  src="images/img_setadireita1.png"
                  alt="setadireitaOne"
                />
                <Text
                  className="mb-[7px] ml-[21px] text-indigo-800_01 text-xl"
                  size="txtEpilogueRomanBold20Indigo80001"
                >
                  Corrida de Vai e Vem
                </Text>
              </div>
              <div className="flex flex-col font-encodesanssemicondensed items-start justify-start w-[96%] md:w-full">
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
                <div className="flex flex-row font-epilogue gap-[9px] items-center justify-start mt-[25px] w-[17%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtEpilogueRomanBold24"
                  >
                    Turma:{" "}
                  </Text>
                  <Text
                    className="bg-indigo-A700_93 h-[30px] justify-center px-3 py-0.5 rounded-[12px] text-2xl md:text-[22px] text-black-900 text-shadow-ts sm:text-xl w-[149px]"
                    size="txtEpilogueRomanBold24"
                  >
                    Primeiro A
                  </Text>
                </div>
                <div className="flex flex-col font-epilogue gap-1.5 justify-start md:ml-[0] ml-[9px] mt-[31px] w-4/5 md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[15px] w-[87%] md:w-full">
                    <Text
                      className="mb-[7px] text-gray-600 text-xl"
                      size="txtEpilogueRomanBold20Gray600"
                    >
                      Aluno
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[285px] md:mt-0 mt-[7px] text-gray-600 text-xl"
                      size="txtEpilogueRomanBold20Gray600"
                    >
                      Corrida 1
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[159px] md:mt-0 mt-[7px] text-gray-600 text-xl"
                      size="txtEpilogueRomanBold20Gray600"
                    >
                      Corrida 2
                    </Text>
                    <Text
                      className="mb-[7px] md:ml-[0] ml-[251px] text-gray-600 text-xl"
                      size="txtEpilogueRomanBold20Gray600"
                    >
                      Resultado
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="bg-white-A700 border border-black-900 border-solid flex flex-col relative rounded-[10px] shadow-bs1 w-full">
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
                      <div className="flex flex-col items-center justify-start mt-[-NaNpx] mx-auto pb-0.5 pr-0.5 w-[97%] z-[1]">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-12 w-full">
                          <Text
                            className="md:mt-0 mt-[7px] text-black-900 text-xl"
                            size="txtEpilogueRomanBold20Black900"
                          >
                            Vanessa Lopes do Santos
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[91px] md:mt-0 mt-1.5 text-black-900 text-xl"
                            size="txtEpilogueRomanBold20Black900"
                          >
                            5
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[228px] md:mt-0 mt-1.5 text-black-900 text-xl"
                            size="txtEpilogueRomanBold20Black900"
                          >
                            12
                          </Text>
                          <Text
                            className="bg-light_green-A700 border border-light_green-900 border-solid h-9 justify-center md:ml-[0] ml-[312px] sm:px-5 px-[35px] py-[7px] rounded-[7px] text-black-900 text-xl w-[229px]"
                            size="txtEpilogueRomanBold20Black900"
                          >
                            15
                          </Text>
                        </div>
                      </div>
                      <div className="overflow-auto mt-[-36px] mx-auto w-[97%] z-[1]">
                        <ReactTable
                          columns={table1Columns}
                          data={table1Data.current}
                          rowClass={""}
                          headerClass=""
                        />
                      </div>
                    </div>
                    <Text
                      className="bg-indigo-900 h-[35px] justify-center mt-[35px] pl-[30px] pr-[35px] sm:px-5 py-0.5 rounded-[12px] sm:text-2xl md:text-[26px] text-[28px] text-shadow-ts text-white-A700 w-[251px]"
                      size="txtEpilogueRomanBold28"
                    >
                      Enviar Teste{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[23px] mt-[147px] text-gray-600_01 text-xl"
                      size="txtEpilogueRomanBold20Gray60001"
                    >
                      100 Testes
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoordenacaoHomeOneOnePage;
