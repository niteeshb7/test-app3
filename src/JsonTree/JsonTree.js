import {Link} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const isObject = value => (typeof value === 'object' && !Array.isArray(value) && value !== null);
const isArray = value => (value instanceof Array);

function createTree(obj) {
    if (isObject(obj)) {
        return Object.entries(obj).map(([key, value]) => {
            return {name: key, children: createTree(value)}
        });
    } else if (isArray(obj)) {
        return obj.map((item, index) => ({name: index, children: createTree(item)}));
    } else {
        return null;
    }
}

function TwoSpaces(){
    return <>&nbsp;&nbsp;</>
}

export default function JsonTree({jsonData}) {
    const treeData = createTree(jsonData);
    console.log(treeData);
    return (
        <div>
            {treeData.map((item, index) => {
                return (
                    <>
                        <div key={index}>{item.children ? <ArrowRightIcon/> : null}
                            <Link href={'#'}>{item.name}</Link>
                        </div>
                        <div>
                        </div>
                    </>

                );
            })}
        </div>
    );
}