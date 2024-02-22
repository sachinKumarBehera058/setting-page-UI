import React, { useState } from 'react'
import { Table, HTMLTableCell, Badge, Button } from "@attrybtech/attryb-ui"
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent'; 
import "./TemplateLibrary.css"
import moment from"moment";


const columns = [
    {
        key: "usecase",
        title: "Template Name",
        style: { whiteSpace: "normal"},
        clickable: false,
        render: (_, { usecase }) => (
            <>
                <HTMLTableCell
                    icon={usecase.icon}
                    header={usecase.header}
                />
            </>
        ),
    },
    {
        key: "status",
        title: "Status",
        style: { whiteSpace: "nowrap"},
        render: (_, { status }) => (
            <>
                {status === "Approved" ? (
                    <Badge variant="success" isDot={true} labelText={status} />
                ) : status === "Pending" ? (
                    <Badge variant="warning" isDot={true} labelText={status} />
                ) : status === "Rejected" ? (
                    <Badge variant="danger" isDot={true} labelText={status} />
                ) : status === "Scheduled" && (
                    <Badge variant="indigo" isDot={true} labelText={status} />
                )}
            </>
        ),
    },
    {
        key: "category",
        title: "Category",
        // style: { width: 100 },
        style:{whiteSpace: "nowrap" , textAlign: "center"},
        headerStyle: { textAlign: "center"},
        render: (_, { category }) => (
          <>
            {category}
          </>
        )
      },
    {
        key: "createdAt",
        title: "Created At",
        style: { whiteSpace: "nowrap", textAlign: "center" },
        headerStyle: { textAlign: "center"},
        render: (_, { createdAt }) => (
            <>
                {createdAt}
            </>
        ),
    },
    {
        key: "flaggedAt",
        title: "Flagged At",
        style: { whiteSpace: "nowrap", textAlign: "center"},
        headerStyle: { textAlign: "center"},
        render: (_, { flaggedAt }) => (
            <>
                {flaggedAt}
            </>
        ),
    },
];

const data = [
    {
        fullName: "kartik",
        status: "Approved",
        category: "Marketing",
        usecase: {
            icon: "/attryb-ui/assets/icons/table/use-case-icons/Recently viewed icon.svg",
            header: "Mother's Day",
        },
        createdAt: moment().format('lll'),
        flaggedAt : "-",
    },
    {
        fullName: "kartik",
        status: "Approved",
        category: "Utility",
        usecase: {
            icon: "/attryb-ui/assets/icons/table/use-case-icons/Free shipping banner icon.svg",
            header: "Demo1",
        },
        createdAt: moment().format('lll'),
        flaggedAt : "-",
    },
    {
        fullName: "kartik",
        status: "Pending",
        category: "Marketing",
        usecase: {
            icon: "/attryb-ui/assets/icons/table/use-case-icons/Discount popup signup side page icon.svg",
            header: "Sports Exclusives",
        },
        createdAt: moment().format('lll'),
        flaggedAt: moment().format('lll'),
    },
    {
        fullName: "kartik",
        status: "Pending",
        category: "Marketing",
        usecase: {
            icon: "/attryb-ui/assets/icons/table/use-case-icons/Discount popup icon.svg",
            header: "Sports Exclusives",
        },
        createdAt: moment().format('lll'),
        flaggedAt : "-",
    },
    {
        fullName: "kartik",
        status: "Scheduled",
        category: "Utility",
        usecase: {
            icon: "/attryb-ui/assets/icons/table/use-case-icons/Discount banner Side Popup icon.svg",
            header: "Sports Exclusives",
        },
        createdAt: moment().format('lll'),
        flaggedAt : "-",
    },
    {
        fullName: "kartik",
        status: "Rejected",
        category: "Marketing",
        usecase: {
            icon: "/attryb-ui/assets/icons/table/use-case-icons/Discount banner Section icon.svg",
            header: "Sports Exclusives",
        },
        createdAt: moment().format('lll'),
        flaggedAt : "-",
    },
    {
        fullName: "kartik",
        status: "Rejected",
        category: "Utility",
        usecase: {
            icon: "/attryb-ui/assets/icons/table/use-case-icons/Discount banner Section icon.svg",
            header: "Sports Exclusives",
        },
        createdAt: moment().format('lll'),
        flaggedAt : "-",
    },
   
];

const handleClick = (e, item) => {
    console.log("You clicked on", item.usecase?.header);
};

let limitRows = [];

const TemplateLibrary = () => {
    const [viewallFilterClickedState, setViewallFilterClickedState] = useState(false);
    const [approvedFilterClickedState, setApprovedFilterClickedState] = useState(false);
    const [pendingFilterClickedState, setPendingClickedState] = useState(false);
    const [draftFilterClickedState, setDraftFilterClickedState] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowApprovedItem, setRowApprovedItem] = useState();
    const onSelect = (item) => {
        setRowApprovedItem(item);
    };
    const handleSorting = (e, column) => {
        // console.log('column:', column)
        // console.log('e:', e)
    };
    const handlefilterClickViewAll = () => {
        setApprovedFilterClickedState(false);
        setPendingClickedState(false);
        setDraftFilterClickedState(false);
        setViewallFilterClickedState(true);
        console.log("You clicked on the Viewall Filter!");
    };
    const handleFilterClickApproved = () => {
        setViewallFilterClickedState(false);
        setPendingClickedState(false);
        setDraftFilterClickedState(false);
        setApprovedFilterClickedState(true);
        console.log("You clicked on the Approved Filter!");
    };
    const handleFilterClickPending = () => {
        setApprovedFilterClickedState(false);
        setViewallFilterClickedState(false);
        setDraftFilterClickedState(false);
        setPendingClickedState(true);
        console.log("You clicked on the Pending Filter!");
    };
    const handlefilterClickDraft = () => {
        setApprovedFilterClickedState(false);
        setPendingClickedState(false);
        setViewallFilterClickedState(false);
        setDraftFilterClickedState(true);
        console.log("You clicked on the Draft Filter!");
    };
    return (
        <div className="table-parent">
            {/* top functionality wrapper starts */}
            <div className="top-functionality--wrapper">
                <div className="left-container--wrapper">
                    <Button
                        variant="solid"
                        onClick={handlefilterClickViewAll}
                        state={viewallFilterClickedState ? "clicked" : ""}
                        colorScheme="secondary"
                        style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}
                    >
                        View All
                    </Button>
                    <Button
                        variant="solid"
                        onClick={handleFilterClickApproved}
                        state={approvedFilterClickedState ? "clicked" : ""}
                        colorScheme="secondary"
                        style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", borderRight: "0px" }}
                    >
                        Approved
                    </Button>
                    <Button
                        variant="solid"
                        onClick={handleFilterClickPending}
                        state={pendingFilterClickedState ? "clicked" : ""}
                        colorScheme="secondary"
                        style={{ borderRadius: "0px", borderRight: "0px" }}
                    >
                        Pending
                    </Button>
                    <Button
                        variant="solid"
                        onClick={handlefilterClickDraft}
                        state={draftFilterClickedState ? "clicked" : ""}
                        colorScheme="secondary"
                        style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}
                    >
                        Draft
                    </Button>

                </div>
                <div className="right-container--wrapper">
                    <SearchBarComponent placeholder={"Search for Use Case"} isOpenInit={false} />
                    <Button variant="solid" colorScheme="secondary">
                        <img src="/attryb-ui/assets/icons/loader/filter-linesicon.svg" alt='filter-icon' />
                        Filters
                    </Button>
                </div>
            </div>
            {/* the top functionality wrapper ends  */}
            <Table
                data={data}
                columns={columns}
                showPaginationFooter={false}
                onClickRow={handleClick}
                onPageChange={(e, selectedPage) => {
                    setCurrentPage(selectedPage);
                }}
                totalPageCount={10}
                currentPage={currentPage}
                pageSize={10}
                showRowsLimit={true}
                limitRows={limitRows}
                rowApprovedItem={rowApprovedItem}
                onSelect={onSelect}
                onHeaderClick={handleSorting}
                sortingType="client"
            />
        </div>
    )
}

export default TemplateLibrary