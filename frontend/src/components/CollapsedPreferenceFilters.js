import  React, { useState,useEffect }  from 'react';
import PreferenceFormGroup from './PreferenceFormGroup';
import { useDispatch} from 'react-redux';
import { setPreferences } from 'actions/setPreferences';

function CollapsedPreferenceFilters() {
  const prefereceItems=[
    {
        name:"price",
        itemsList:["All","under $10","$10-$20","$21-$30","above $30"]},
    {
      name:"soup",
      itemsList:["All",'soup',"no soup"]
    },
    {
      name:"pungency",
      itemsList:["All","no spicy","mild","spicy","hot"]},
    {
      name:"Meat",
      itemsList:["All","vegentarian","pork","beef","chicken","other"]
    }
];
const intialVals={price:"All",soup:"All",pungency:"All",Meat:"All"}
const [inputVals,setInputVals]=useState(intialVals);
const dispatch=useDispatch();
const handleInputVals=(e)=>{
  setInputVals({...inputVals,[e.target.name]:e.target.value});
  
}

useEffect(()=>{

  dispatch(setPreferences(inputVals))
},[inputVals])

    return (
        <div className="filterItems" id="content-filter-details-collapsed">
          <ul  className="list-group">
          {prefereceItems.map(item=><li key={item.name} className="list-group-item"><PreferenceFormGroup  preferenceObj={item} formGroupState={inputVals[item.name]} handleOnchange={handleInputVals}/></li> )}
          </ul>
          
        </div>
    )
    
}
export default CollapsedPreferenceFilters;