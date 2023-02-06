import {ListGroup} from "react-bootstrap";
import {useDeviceStore} from "../../store/useDeviceStore";

export const TypeBar = () => {

  const types = useDeviceStore(state => state.types)
  const selectedType = useDeviceStore(state => state.selectedType);
  const setSelectType = useDeviceStore(state => state.setSelectedType);

  return (
    <ListGroup>
      {types.map(type=>
        <ListGroup.Item
          style={{cursor:'pointer'}}
          active={type.id===selectedType?.id}
          onClick={()=>setSelectType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}