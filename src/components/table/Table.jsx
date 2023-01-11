
import React, { useEffect, useRef } from "react";
import Dropdown from "../others/Dropdown";
import { RiDeleteBinFill } from "react-icons/ri";
import { GrCheckbox } from "react-icons/gr";
import { getByStatusText } from "../../utils/color.utils";
import Pagination from "./Pagination";
import Loader from "../others/Loader";
import './table.css'


export default function Table({
	data,
	dropdownMenu,
	pagination,
	setPagination,
	colorizeStatus,
	openModal,
	isLoading = false,
	_clickedRowData,
	checkbox={text: "Bulk Delete", action: ()=>{}} 
}) {
	const [checkedList, setCheckedList] = React.useState([]),
		allInputChecker = useRef(false)
		

	const check = {
		all: (_) => {
			setCheckedList(data?.map((item) => item._id));
			check.checkAll();
		},
		checkAll: (_) => {
			checkedList.forEach((_id) => {
				if(document.getElementById(_id)) document.getElementById(_id).checked = true;
				else setCheckedList([])
			});
		},
		handleCheck: () => {
			const status = allInputChecker.current.checked;
			if (status) {
				check.all();
			} else {
				check.toggleCheck();
				setCheckedList([]);
			}
		},
		toggleCheck: (res) => {
			if (res) {
				const newCheckedList = [...checkedList];
				if (newCheckedList.includes(res._id)) {
					newCheckedList.splice(newCheckedList.indexOf(res._id), 1);
				} else {
					newCheckedList.push(res._id);
				}
				setCheckedList(newCheckedList);
			} else {
				checkedList.forEach((_id) => {
					document.getElementById(_id).checked = false;
				});
			}
		},
	};

	const keys = Object.keys(data[0]);
	return (
		<div className="table-container ">
			<div
				className="flex items-center mb-2 "
				style={{
					visibility: `${checkedList.length > 1 ? "visible" : "hidden"}`,
				}}>
				<div
				onClick={_=>checkbox.action(checkedList, ()=>{
					check.toggleCheck();
				setCheckedList([]);
				})}
					style={{
						background:"#EBF9E9" ,
						color:  "#2B6112"  
					}}
					className="flex items-center cursor-pointer mr-5 px-2 py-1 rounded">
					<RiDeleteBinFill
						color={ "#2B6112" }
						className="shadow-sm mr-2"
					/>
					<span> {checkbox.text } </span>
				</div>
				<div
					className="flex items-center cursor-pointer"
					onClick={(_) => {
						check.toggleCheck();
						setCheckedList((_) => []);
					}}>
					<GrCheckbox color="var(--C_success)" className="shadow-sm mr-2" />
					<span className="ml-auto">Unselect All</span>
				</div>
			</div>

			<table className="border-collapse w-[90%] m-auto custom-table">
				<thead className="border-spacing-y-20">
					<tr className="">
						{keys.map((name, i) => {
							return (
								!name.startsWith("_") && (
									<th key={i} className="text-left px-8 py-8">
										{name}
									</th>
								)
							);
						})}
						{dropdownMenu && <th>Action</th>}
					</tr>
				</thead>

				{!isLoading &&
					(pagination.total ? (
						<tbody>
							{data.map((res, index) => {
								return (
									<tr className="p-20 mt-5" key={index}>
										{keys.map((name, i) => {
											const value = res[name];
											const _clickable =
												res._clickable && res._clickTarget === value;
											const style = getByStatusText(value, colorizeStatus);
											return (
												!name.startsWith("_") && (
													<td
														key={res._id + "_" + i}
														className={`td truncate "capitalize "} px-8`}>
															<>
															{typeof value == "string" &&
														(value.startsWith("https") || value.startsWith("/")) ? (
													
																<img
															className="cursor-pointer"
															onClick={_=>window.open(value, "_blank")}
																src={value}
																style={{
																	width: "50px",
																	height: "50px",
																	borderRadius: "45px",
																}}
																alt="location"
															/>
															
														) :(
														<span
															onClick={
																_clickable
																	? () => {
																			_clickedRowData(res._data);
																			openModal(true);
																	  }
																	: () => {}
															}
															className={`${
																Object.keys(style).length
																	? "py-1 px-2 rounded"
																	: ""
															} ${_clickable ? "cursor-pointer" : ""}`}
															style={{ ...style }}>
															{value}
														</span>)}
														</>
													</td>
												)
											);
										})}

										{dropdownMenu && (
											<td className="items-center flex justify-center">
												<Dropdown {...{ menu: dropdownMenu, rowProp: res }} />
											</td>
										)}
									</tr>
								);
							})}
						</tbody>
					) : (
						""
					))}
			</table>
			{isLoading && (
				<div className="flex my-5 items-center justify-center w-full">
					<Loader />
				</div>
			)}
			{!isLoading && !pagination.total && (
				<div className="flex my-5 items-center justify-center w-full">
					<h3 className="text-center">No record found</h3>
				</div>
			)}
			{pagination.total ? (
				<div className={`w-[90%] m-auto my-10 pb-5 ${isLoading ? "visible" : "visible"}`}>
					<div className="flex justify-between items-center">
						<p className="text-sm" style={{ color: "var(--C_blue_light)" }}>
							Showing{" "}
							<span>
								{Math.min(pagination.length, pagination.total) ||
									pagination.pageSize}
							</span>{" "}
							{pagination.total > 1 ? "results" : "result"} of{" "}
							<span>{pagination.total}</span>{" "}
							{pagination.total > 1 ? "records" : "record"}
						</p>

						<Pagination
							{...{
								page: pagination.page-1,
								itemsPerPage: pagination.pageSize,
								setPagination,
								total: pagination.total,
							}}
						/>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}
