function toggleFAQ(number){
    faq_id = `faq-${number}`
    drop_id = `drop-${number}`
    if (document.getElementById(faq_id).style.display == 'block'){
    // if (document.getElementById(faq_id).style.height == '0px'){
        document.getElementById(faq_id).style.display = 'none'
        // document.getElementById(faq_id).style.height = 'auto'
        document.getElementById(drop_id).innerHTML = '+'
    }
    else {
        document.getElementById(faq_id).style.display = 'block'
        // document.getElementById(faq_id).style.height = '0px'
        document.getElementById(drop_id).innerHTML = 'X'
    }
}