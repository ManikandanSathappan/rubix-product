package com.rubixtek.rubixbooks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rubixtek.rubixbooks.entities.Bill;
import com.rubixtek.rubixbooks.entities.BillItem;
import com.rubixtek.rubixbooks.entities.Supplier;


@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {
	BillItem save(BillItem billItem);
	Bill findByBillNoAndSupplier(int bill,Supplier sup);
	//List<Bill> findBySupplierIdAndDate(Bill billObj);
	 
}
