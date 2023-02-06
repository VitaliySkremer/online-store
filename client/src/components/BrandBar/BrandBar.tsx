import {useDeviceStore} from "../../store/useDeviceStore";
import {Card, ListGroup} from "react-bootstrap";

export const BrandBar = () => {
  const brands = useDeviceStore(state => state.brands)
  const selectedBrand = useDeviceStore(state => state.selectedBrand);
  const setSelectBrand = useDeviceStore(state => state.setSelectedBrand);

  return (
    <ListGroup horizontal>
      {brands.map(brand=>
        <ListGroup.Item
          key={brand.id}
          className="p-2"
          style={{cursor:'pointer'}}
          onClick={()=>setSelectBrand(brand)}
          active={brand.id === selectedBrand?.id}
        >
          {brand.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}