import classes from './Container.module.css';
import ContainerItems from './ContainerItems';

const Container = (props) => {
    const item = props.labels.map((label) => (
        <ContainerItems label={label.label} key={label.key} id={label.key}/>
    ));
    console.log({props})
    return (
        
        <div className={classes.box}>
            {item}
        </div>
    
    );
}

export default Container;
