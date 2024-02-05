import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";

const CoordenacaoHomeOnePage = () => {
  const tableData = React.useRef([
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      femininoOne: "Feminino",
      twelveOne: "12",
      groupFourteen: "32",
      bomOne: "Fraco",
    },
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      femininoOne: "Feminino",
      twelveOne: "12",
      groupFourteen: "48",
      bomOne: "Bom",
    },
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      femininoOne: "Feminino",
      twelveOne: "12",
      groupFourteen: "22",
      bomOne: "Muito Fraco",
    },
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      femininoOne: "Feminino",
      twelveOne: "12",
      groupFourteen: "48",
      bomOne: "Bom",
    },
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      femininoOne: "Feminino",
      twelveOne: "12",
      groupFourteen: "48",
      bomOne: "Bom",
    },
    {
      vanessalopesdoOne: "Vanessa Lopes do Santos",
      femininoOne: "Feminino",
      twelveOne: "12",
      groupFourteen: "48",
      bomOne: "Bom",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("vanessalopesdoOne", {
        cell: (info) => (
          <Text
            className="text-black-900 text-xl"
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
      tableColumnHelper.accessor("femininoOne", {
        cell: (info) => (
          <Text
            className="text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[92px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            Feminino
          </Text>
        ),
      }),
      tableColumnHelper.accessor("twelveOne", {
        cell: (info) => (
          <Text
            className="text-black-900 text-xl"
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
      tableColumnHelper.accessor("groupFourteen", {
        cell: (info) => (
          <Text
            className="border border-black-900 border-solid sm:px-5 px-[35px] py-[7px] rounded-[7px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="border border-black-900 border-solid min-w-[253px] sm:px-5 px-[35px] py-[7px] rounded-[7px] text-black-900 text-xl"
            size="txtEpilogueRomanBold20Black900"
          >
            48
          </Text>
        ),
      }),
      tableColumnHelper.accessor("bomOne", {
        cell: (info) => (
          <Button
            className="border border-solid border-yellow-800 cursor-pointer font-bold leading-[normal] min-w-[229px] text-center text-xl"
            shape="round"
            color="amber_500"
          >
            <div className="border border-solid border-yellow-800 text-black-900">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button
            className="border border-light_green-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[229px] text-center text-xl"
            shape="round"
          >
            <div className="min-w-[229px]">Bom</div>
          </Button>
        ),
      }),
    ];
  }, []);

  const sideBarMenu = [
    { label: "Gerenciar" },
    { label: "Turmas" },
    { label: "Alunos" },
    { label: "Testes" },
  ];
  const sideBarMenu1 = [
    { label: "Flexão Abdominal" },
    { label: "Flexão de Braços no.." },
    { label: "Sentar e Alcançar" },
    { label: "Salto Horizontal" },
    { label: "Salto Vertical" },
    { label: "Arremeço de Medici.." },
    { label: "Agilidade do Quadra.." },
    { label: "Agilidade de Illinois" },
    { label: "Velocidade" },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-epilogue items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[338px] bg-gradient  flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-indigo-900_01 flex flex-row gap-[11px] items-center justify-start mr-[9px] p-4 w-[98%]">
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
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  flexDirection: "column",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "20px",
                  paddingLeft: "31px",
                  paddingRight: "31px",
                },
              }}
              className="flex flex-col items-center justify-start mt-[21px] w-full"
            >
              <div className="flex flex-col font-roboto items-center justify-start pb-[193px] w-full">
                <div className="flex flex-col gap-[29.64px] items-center justify-start w-full">
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
                <div className="flex sm:flex-col flex-row font-epilogue sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtEpilogueRomanBold20"
                  >
                    Testes
                  </Text>
                  <Img
                    className="flex-1 h-[21px] sm:h-auto object-cover w-full"
                    src="images/img_rightarrow2.png"
                    alt="rightarrowTwo"
                  />
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold font-epilogue leading-[normal] min-w-[338px] mt-[27px] rounded-[13px] text-center text-xl"
                color="indigo_700"
              >
                Corrida de vai e vem..
              </Button>
              <div className="flex flex-col font-epilogue gap-[13px] items-center justify-start mt-[3px] w-full">
                {sideBarMenu1?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </Menu>
            <div className="flex flex-col items-center justify-start mb-[42px] ml-2 mr-[123px] mt-[261px] w-[61%]">
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
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[21px] items-center justify-start md:mt-0 mt-[3px] md:px-5 w-full">
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
                  Selecione a turma
                </Text>
                <div className="bg-white-A700 border border-deep_purple-A700 border-solid flex flex-row gap-4 items-end justify-start p-1.5 rounded-[10px] shadow-bs w-full">
                  <Img
                    className="h-[37px] md:h-auto mb-[9px] ml-[3px] object-cover w-[3%]"
                    src="images/img_lupa.png"
                    alt="lupa"
                  />
                  <Text
                    className="mb-2 mt-3 text-black-900_7f text-xl"
                    size="txtEncodeSansSemiCondensedMedium20"
                  >
                    Procurar por Turma ...
                  </Text>
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
              <div className="flex flex-col font-epilogue gap-[13px] justify-start md:ml-[0] ml-[9px] mt-[31px] w-4/5 md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[15px] w-[87%] md:w-full">
                  <Text
                    className="text-gray-600 text-xl"
                    size="txtEpilogueRomanBold20Gray600"
                  >
                    Nome
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[291px] text-gray-600 text-xl"
                    size="txtEpilogueRomanBold20Gray600"
                  >
                    Sexo{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[120px] text-gray-600 text-xl"
                    size="txtEpilogueRomanBold20Gray600"
                  >
                    Idade{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[55px] text-gray-600 text-xl"
                    size="txtEpilogueRomanBold20Gray600"
                  >
                    Número de Repetições
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[69px] text-gray-600 text-xl"
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
                        <Line className="bg-black-900 h-[504px] sm:h-px ml-40 sm:ml-[0] sm:w-full w-px" />
                        <Line className="bg-black-900 h-[504px] sm:h-px sm:ml-[0] ml-[114px] sm:w-full w-px" />
                        <Line className="bg-black-900 h-[504px] sm:h-px sm:ml-[0] ml-[291px] sm:w-full w-px" />
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
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-12 w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtEpilogueRomanBold20Black900"
                        >
                          Vanessa Lopes do Santos
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[91px] text-black-900 text-xl"
                          size="txtEpilogueRomanBold20Black900"
                        >
                          Feminino
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[78px] text-black-900 text-xl"
                          size="txtEpilogueRomanBold20Black900"
                        >
                          12
                        </Text>
                        <Text
                          className="bg-gray-200 border border-black-900 border-solid h-9 justify-center md:ml-[0] ml-[91px] sm:px-5 px-[35px] py-[7px] rounded-[7px] text-black-900 text-xl w-[253px]"
                          size="txtEpilogueRomanBold20Black900"
                        >
                          48
                        </Text>
                        <Button
                          className="border border-light_green-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[229px] md:ml-[0] ml-[39px] text-center text-xl"
                          shape="round"
                        >
                          Bom
                        </Button>
                      </div>
                    </div>
                    <div className="overflow-auto mt-[-36px] mx-auto w-[97%] z-[1]">
                      <ReactTable
                        columns={tableColumns}
                        data={tableData.current}
                        rowClass={""}
                        headerClass=""
                      />
                    </div>
                  </div>
                  <Text
                    className="bg-indigo-900 h-[35px] justify-center mt-[35px] pl-[30px] pr-[35px] sm:px-5 py-0.5 rounded-[12px] sm:text-2xl md:text-[26px] text-[28px] text-shadow-ts text-white-A700 w-[251px]"
                    size="txtEpilogueRomanBold28"
                  >
                    Enviar dados{" "}
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
    </>
  );
};

export default CoordenacaoHomeOnePage;
