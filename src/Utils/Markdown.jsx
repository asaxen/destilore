import React from 'react';
import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import {TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";
import CodeBlock from "./CodeBlock";
import { red } from '@material-ui/core/colors';

const styles = (theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
    },
    header: {
        marginTop: theme.spacing(2),
    }
});

function MarkdownParagraph(props) {
    return <Typography>{props.children}</Typography>
}

const MarkdownHeading = withStyles(styles)(({ classes, ...props }) => {
    let variant;
    switch (props.level) {
        case 1:
            variant = "h5";
            break;
        case 2:
            variant = "h6";
            break;
        case 3:
            variant = "subtitle1";
            break;
        case 4:
            variant = "subtitle2";
            break;
        default:
            variant = "h6";
            break;
    }
    return <Typography className={classes.header} gutterBottom variant={variant}>{props.children}</Typography>
});

const MarkdownListItem = withStyles(styles)(({ classes, ...props }) => {
    return (
        <li className={classes.listItem}>
            <Typography component="span">{props.children}</Typography>
        </li>
    );
});

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);

const StyledTableHead= withStyles((theme) => ({
    root: {
       backgroundColor: theme.palette.secondary.main,
    },
}))(TableHead);

function MarkdownTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">{props.children}</Table>
        </TableContainer>
    );
}

function MarkdownTableCell(props) {
    return <TableCell><Typography>{props.children}</Typography></TableCell>
}

function MarkdownTableRow(props) {
    return <StyledTableRow>{props.children}</StyledTableRow>
}

function MarkdownTableBody(props) {
    return <TableBody>{props.children}</TableBody>
}

function MarkdownTableHead(props) {
    return <StyledTableHead>{props.children}</StyledTableHead>
}

const renderers = {

    heading: MarkdownHeading,
    paragraph: MarkdownParagraph,
    link: Link,
    listItem: MarkdownListItem,
    table: MarkdownTable,
    tableHead: MarkdownTableHead,
    tableBody: MarkdownTableBody,
    tableRow: MarkdownTableRow,
    tableCell: MarkdownTableCell,
    code: CodeBlock
};

export default function Markdown(props) {
    return <ReactMarkdown escapeHtml={false} renderers={renderers} {...props} />;
}