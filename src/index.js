import React from 'react';
import ReactDOM from "react-dom";
import data from "./movies";
import DataTable from "react-data-table-component";

const App = () => {
    const [hideDirector, setHideDirector] = React.useState(false);

    const columns = React.useMemo(() => [
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Director',
            selector: 'director',
            sortable: true,
            omit: hideDirector,
        },
        {
            name: 'Year',
            selector: 'year',
            sortable: true,
        },
    ], [hideDirector]);

    return (
        <>
            <button onClick={() => setHideDirector(!hideDirector)}>Hide Directory Column</button>
            <DataTable
                title="Movie List"
                columns={columns}
                data={data}
            />
        </>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);