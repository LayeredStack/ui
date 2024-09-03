import React from 'react'

export default function Table(props) {
  return (
    <table className={`ls_ui-table ${props.className}`}>
      <thead>
        <tr>
          <th>Invoice</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Created</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>616CB9BC-0010</td>
          <td>
            <div className="billing-invoice-status billing-invoice-status-paid">Paid</div>
          </td>
          <td>$50.00</td>
          <td>20 Aug 2024, 22:29</td>
          <td>
            <a href="#" target="_blank" rel="noopener noreferrer" tabindex="0" className="btn btn-sm btn-minimal btn-primary">
              <span className="btn-label-wrap">
                <span className="btn-label-inner">View</span>
              </span>
            </a>
          </td>
        </tr>

        <tr>
          <td>616CB9BC-0010</td>
          <td>
            <div className="billing-invoice-status billing-invoice-status-paid">Paid</div>
          </td>
          <td>$50.00</td>
          <td>20 Aug 2024, 22:29</td>
          <td>
            <a href="#" target="_blank" rel="noopener noreferrer" tabindex="0" className="btn btn-sm btn-minimal btn-primary">
              <span className="btn-label-wrap">
                <span className="btn-label-inner">View</span>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  )
}