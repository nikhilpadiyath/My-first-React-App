import React from 'react';
import Label from './Label.js';
import './ListItem.css';
import {useTooltip} from '../hooks/ourHooks.js';
import Tooltip from './Tooltip.js';

function ListItem( props){
  console.log("RENDER LIST ITEM");
 const {
  title,
  descr,
  isActive,
  onDelete,
  onLabelClick
 } = props;

 const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();

    return (
      <div className="list-item">
            <hr/>
            <div className="list-title">
              <h4>{title}</h4>
              <label 
              ref= {labelRef}
              onClick= {onDelete}
              onMouseEnter={() => {setShowTooltip(true)}}
              onMouseLeave={() => {setShowTooltip(false)}}
              >
                Delete
              <Tooltip ref= {refObj} showTooltip= {showTooltip} message="Delete this"/>
              </label>
            </div>
            <div className="list-descr">
              {descr}
            </div>
            <div className= "list-label">
              <Label isActive= {isActive} onAction={onLabelClick} />
              
            </div>
            <hr/>
          </div>
    )
  }

  export default ListItem;